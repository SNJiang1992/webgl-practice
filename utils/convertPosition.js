/**
 *
 * @param {*} canvas canvas Dom节点
 * @param {*} pos 鼠标事件得到的所在位置
 * @returns 返回webgl坐标体系下的2维坐标
 */
export function convertPosition(canvas, pos) {
  const { x, y } = canvas.getBoundingClientRect();
  const width = canvas.width;
  const height = canvas.height;
  return {
    x: ((pos.x - x - width / 2) * 2) / width,
    y: (-(pos.y - y - height / 2) * 2) / height,
  };
}
