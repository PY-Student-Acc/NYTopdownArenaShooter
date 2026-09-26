import { _decorator, Component, EventKeyboard, Node, Camera, Prefab, EventMouse, input } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {

    @property({type: Player, tooltip: 'Drop the Player node here'})
    public player: Player | null = null;

    @property({type: Camera, tooltip: 'Drop the Main Camera here'})
    public camera: Camera | null = null;

    @property({type: Prefab, tooltip: 'Drop the Bullet Prefab here'})
    public defaultBulletPrefab: Prefab | null = null;

    @property({type: Node, tooltip: 'Drop the Bullet Container node here'})
    public bulletContainer: Node | null = null;

    start() {
        if (this.player && this.camera) {
            this.player.initialize(this.camera);
        }

        input.on(Input.EventType.KEYDOWN, this.onKeyDown, this)
        input.on(Input.EventType.KEYUP, this.onKeyUp, this)
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this)
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this)
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this)
    }

    protected onDestroy(): void {
        
    }

    update(deltaTime: number) {
        
    }

    private onKeyDown(event: EventKeyboard): void {}
    private onKeyUp(event: EventKeyboard): void {}
    private onMouseMove(event: EventMouse): void {}
    private onMouseDown(event: EventMouse): void {}
    private onMouseUp(event: EventMouse): void {}
}


