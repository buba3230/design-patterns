export abstract class AbstractClass {
    public templateMethod(): string[] {
        const log: string[] = [];
        log.push(this.baseOperation1());
        log.push(this.requiredOperations1());
        log.push(this.baseOperation2());
        log.push(this.hook1());
        log.push(this.requiredOperation2());
        log.push(this.baseOperation3());
        log.push(this.hook2());
        return log;
    }

    protected baseOperation1(): string {
        return 'AbstractClass : make base operation 1';
    }

    protected baseOperation2(): string {
        return 'AbstractClass : make base operation 2';
    }

    protected baseOperation3(): string {
        return 'AbstractClass : make base operation 3';
    }

    protected abstract requiredOperations1(): string;

    protected abstract requiredOperation2(): string;

    protected hook1(): string { return 'AbstractClass : clear hook 1'; }

    protected hook2(): string { return 'AbstractClass : clear hook 2'; }
}

export class MyClass1 extends AbstractClass {
    protected requiredOperations1(): string {
        return 'MyClass1 : make his required operation 1';
    }

    protected requiredOperation2(): string {
        return 'MyClass1 : make his required operation 2';
    }
}

export class MyClass2 extends AbstractClass {
    protected requiredOperations1(): string {
        return 'MyClass2 : make his required operation 1';
    }

    protected requiredOperation2(): string {
        return 'MyClass2 : make his required operation 1';
    }

    protected hook1(): string {
        return 'MyClass2 : make his overridden Hook1';
    }
}