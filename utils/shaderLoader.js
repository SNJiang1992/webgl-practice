/**
 *
 * @param {*} gl webglContext对象
 * @param {*} vsSource 顶点着色器
 * @param {*} fsSource 片元着色器
 */
export function initShaders(gl, vsSource, fsSource) {
  // 创建程序对象
  const program = gl.createProgram();
  // 建立着色对象
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  // 着色对象装进程序中
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  // 连接上下文和程序对象
  gl.linkProgram(program);
  //启动程序
  gl.useProgram(program);
  // 挂载程序对象
  gl.program = program;
  return;
}

/**
 *
 * @param {*} gl webglContext对象
 * @param {*} type shader类型
 * @param {*} source shader源文件
 */
function loadShader(gl, type, source) {
  //根据着色类型，建立着色器对象
  const shader = gl.createShader(type);
  //将着色器源文件传入着色器对象中
  gl.shaderSource(shader, source);
  // 编译shader
  gl.compileShader(shader);
  // 返回shader
  return shader;
}
