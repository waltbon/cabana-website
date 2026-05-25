"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform vec2 u_smouse;
uniform float u_time;
uniform vec4 u_ripples[8];

void main(){
  vec2 p = (gl_FragCoord.xy - 0.5*u_res.xy) / u_res.y;
  vec2 m = (u_smouse - 0.5) * vec2(u_res.x/u_res.y, 1.0);
  float t = u_time * 0.55;

  vec2 d = p - m;
  float r = length(d);
  float pull = 0.5 / (r*r + 0.35);
  p += normalize(d + 1e-4) * -pull * 0.02;

  float pulse = 0.0;
  for (int i = 0; i < 8; i++){
    vec4 rp = u_ripples[i];
    if (rp.w <= 0.0) continue;
    vec2 rpos = (rp.xy - 0.5) * vec2(u_res.x/u_res.y, 1.0);
    float age = u_time - rp.z;
    if (age < 0.0 || age > 2.0) continue;
    pulse += exp(-length(p - rpos)*2.5) * exp(-age*1.2) * rp.w;
  }

  float v = 0.0;
  v += sin(p.x*6.0 + t*1.3);
  v += sin((p.y + m.y*0.5)*6.0 + t*1.1);
  v += sin((p.x + p.y + t*0.7)*5.0);
  v += sin(length(p - m*0.6)*10.0 - t*2.0);
  v += pulse * 4.0;
  v *= 0.25;

  float hue = 0.38 + 0.18*sin(v*3.1415 + t*0.3) + u_smouse.x*0.08;
  float sat = 0.80;
  float val = 0.55 + 0.45*sin(v*3.1415*2.0);

  vec3 c = clamp(abs(mod(hue*6.0+vec3(0.,4.,2.),6.0)-3.0)-1.0, 0.0, 1.0);
  vec3 col = val * mix(vec3(1.0), c, sat);

  col *= smoothstep(1.4, 0.2, length(p));
  col += vec3(0.5,0.25,0.8) * exp(-r*5.0) * 0.25;

  gl_FragColor = vec4(col, 1.0);
}
`;

interface Ripple { x: number; y: number; t: number; s: number; }

export function PlasmaField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) return;

    function compileShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uSmouse = gl.getUniformLocation(prog, "u_smouse");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRipples = gl.getUniformLocation(prog, "u_ripples[0]");

    let W = 0, H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: 0.5, y: 0.5 };
    const smouse = { x: 0.5, y: 0.5 };
    const ripples: Ripple[] = [];
    let startTime = performance.now();
    let rafId = 0;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      W = Math.floor(rect.width * dpr);
      H = Math.floor(rect.height * dpr);
      canvas!.width = W;
      canvas!.height = H;
      gl!.viewport(0, 0, W, H);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = 1.0 - (e.clientY - rect.top) / rect.height;
    }

    function onClick(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      const t = (performance.now() - startTime) / 1000;
      if (ripples.length >= 8) ripples.shift();
      ripples.push({ x, y, t, s: 1.0 });
    }

    function frame() {
      const time = (performance.now() - startTime) / 1000;

      smouse.x += (mouse.x - smouse.x) * 0.06;
      smouse.y += (mouse.y - smouse.y) * 0.06;

      gl!.uniform2f(uRes, W, H);
      gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.uniform2f(uSmouse, smouse.x, smouse.y);
      gl!.uniform1f(uTime, time);

      const rippleData = new Float32Array(8 * 4);
      for (let i = 0; i < 8; i++) {
        const r = ripples[i];
        if (r) {
          rippleData[i * 4 + 0] = r.x;
          rippleData[i * 4 + 1] = r.y;
          rippleData[i * 4 + 2] = r.t;
          rippleData[i * 4 + 3] = r.s;
        }
      }
      gl!.uniform4fv(uRipples, rippleData);

      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(frame);
    }

    resize();
    startTime = performance.now();
    rafId = requestAnimationFrame(frame);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("click", onClick);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block" }}
    />
  );
}
