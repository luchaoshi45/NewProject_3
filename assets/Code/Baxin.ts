import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Baxin')
export class Baxin extends Component {
    // 初始角度
    deltaAngle: number = -50;
    Angle: number = 0;

    protected onLoad(): void {
        // 从节点当前的旋转角度初始化角度
        this.Angle = this.node.eulerAngles.z; // 假设节点的旋转在z轴
        console.log(`Initial Angle: ${this.Angle}`); // 输出初始角度
    }

    protected onDestroy(): void {
        
    }

    start() {
        console.log('Baxin component has started');
    }

    update(deltaTime: number) {
        this.UpdateAngle(deltaTime)
    }
    UpdateAngle(deltaTime: number): void {
        this.Angle += this.deltaAngle * deltaTime; // 每秒增加10度
        this.Angle % 360; // 保证角度在0-359度之间
        this.node.setRotationFromEuler(0, 0, this.Angle); // 设置节点的旋转
    }
}