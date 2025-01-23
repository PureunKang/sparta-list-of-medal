# React + Vite

---

#### 오름차순 트러블슈팅

setNations([...nations, newNation]).sort((a, b) => a.gold - b.gold);
셋네이션 비동기 동작; 그래서 상태업데이트 되기전에 sort실행되니까 안됨

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
