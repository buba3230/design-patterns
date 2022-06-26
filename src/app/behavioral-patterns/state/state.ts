export class Context {
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State): string {
        this.state = state;
        this.state.setContext(this);
        return `Context: Transition to ${(<any>state).constructor.name}.`
    }

    public run(): string {
        return this.state.startRunning();
    }

    public stop(): string {
        return this.state.stop();
    }
}

abstract class State {
    protected context: Context;

    public setContext(context: Context) {
        this.context = context;
    }

    public abstract startRunning(): string;

    public abstract stop(): string;
}

export class StopState extends State {
    public startRunning(): string {
        this.context.transitionTo(new RunningState());
        return 'Now you are in running state';
    }

    public stop(): string {
        return 'You are already stoped...';
    }
}

export class RunningState extends State {
    public startRunning(): string {
        return 'You are already running';
    }

    public stop(): string {
        this.context.transitionTo(new StopState());
        return 'Now you are in stop state';
    }
}

