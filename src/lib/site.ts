// 子路径部署辅助：GitHub 项目页位于 /ciki-profile/ 下
// import.meta.env.BASE_URL 来自 astro.config 的 base（带结尾斜杠）
export const B = import.meta.env.BASE_URL.replace(/\/$/, "");
/** 给站内绝对路径（/xxx）加上 base 前缀 */
export const p = (s: string): string => (s.startsWith("/") ? B + s : s);
