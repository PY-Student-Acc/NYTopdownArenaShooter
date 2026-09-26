import { _decorator, Camera, Component, EventKeyboard, EventMouse, Node } from 'cc';
import { PlayerWeaponSystem } from './PlayerWeaponSystem';
import { PlayerMovementSystem } from './PlayerMovementSystem';
import { PlayerInputSystem } from './PlayerInputSystem';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    private inputSystem: PlayerInputSystem | null = null;
    private movementSystem: PlayerMovementSystem | null = null;
    private weaponSystem: PlayerWeaponSystem | null = null;
    private mainCamer: Camera | null = null;

    protected onLoad(): void {
        this.inputSystem = this.getComponent(PlayerInputSystem)
        this.movementSystem = this.getComponent(PlayerMovementSystem)
        this.weaponSystem = this.getComponent(PlayerWeaponSystem)
    }

    public initialize(camera: Camera): void{

    }

    start() {

    }

    protected update(deltaTime: number) {
        
    }

    public processKeyDown(event: EventKeyboard): void { }
    public processKeyUp(event: EventKeyboard): void { }
    public processMouseDown(event: EventMouse): void { }
    public processMouseUp(event: EventMouse): void { }
    public processMouseMove(event: EventMouse): void { }
}


