import { _decorator, Component, Node, instantiate, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Dao')
export class Dao extends Component {
    // 导入预制体
    @property(Prefab)
    Prefab: Prefab = null; // 预制体

    start() {
        // 在开始时实例化预制体
        this.node.addChild(instantiate(this.Prefab)); // 将预制体添加到当前节点
    }

    update(deltaTime: number) {
        
    }
}


