import { _decorator, Input, input, Component, UITransform, Node, instantiate, Prefab, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Dao')
export class Dao extends Component {
    // 导入预制体
    @property(Prefab)
    Prefab: Prefab = null; // 预制体
    // 初始化预制体实例化队列，用于后续移动控制实例
    private prefabInstances: Node[] = [];

    // 停止位置
    stopPositionX: number = 425;
    stopPositionY: number = 0;

    protected onLoad(): void {
        this.Instantiate(); // 实例化新的预制体
        input.on(Input.EventType.TOUCH_START, (event) => {
            const fistInstance = this.prefabInstances.pop(); // 从队列中移除第一个实例
            // 移动到特定位置
            if (fistInstance) {
                // 匀速移动到停止位置
                // 使用动画库
                console.log(`Moving to position: ${this.stopPositionX}, ${this.stopPositionY}`); // 打印目标位置
                // 使用tween动画库进行平滑移动
                tween(fistInstance)
                    .to(0.5, { position: new Vec3(this.stopPositionX, this.stopPositionY, 0) }, { easing: 'sineInOut' })
                    .call(() => {
                        this.Instantiate();
                    })
                    .start();
            }
        });
    }

    Instantiate(): void {
        const parentWorldPos= this.node.getWorldPosition();
        const instance = instantiate(this.Prefab);
        this.node.addChild(instance);
        instance.setWorldPosition(parentWorldPos);
        this.prefabInstances.push(instance); // 将实例添加到队列中
    }

    protected onDestroy(): void {
        // 清理事件监听器
        input.off(Input.EventType.TOUCH_START);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


