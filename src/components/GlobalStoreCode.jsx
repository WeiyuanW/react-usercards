// Take the lightweight Zustand as an example.

// 步骤一：创建 Store (脱离 React), 在应用代码的任何地方定义一个全局 Store：
// store.js (独立的文件)
import { create } from 'zustand';

// 这个 'useSharedStore' 就是全局 Store 的 Hook
const useSharedStore = create((set) => ({
  sharedData: 'Hello Global Store',
  // 定义修改数据的方法
  updateSharedData: (newValue) => set({ sharedData: newValue }),
}));

// 步骤二：组件使用 Store (直接通信)
// ChildA.jsx
import { useSharedStore } from './store.js'; // 直接引入 Store

function ChildA() {
  // 1. 直接从 Store 中读取数据
  const sharedData = useSharedStore((state) => state.sharedData);
  // 2. 直接从 Store 中获取修改函数
  const update = useSharedStore((state) => state.updateSharedData);

  return (
    <div>
      <p>Child A: {sharedData}</p>
      <button onClick={() => update("Zustand update from A")}>Update</button>
    </div>
  );
}