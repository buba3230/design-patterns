import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FaceBookDecorator, InstagramDecorator, TwitterDecorator } from './decorator';
import { Notificator } from './notificator';

@Component({
    selector: 'app-composite',
    template:
        `
            <h4>We have simple Notificator and Facebook, Twitter, Instagram decorator</h4>
            <p>notificator = new Notificator('Some notification msg')</p>
            <p><b>notificator.sendMsg()</b> => {{notificator.sendMsg()}}</p>
            <br>
            <p>faceBookNotificator = new FaceBookDecorator(notificator)</p>
            <p><b>faceBookNotificator.sendMsg()</b> => {{faceBookNotificator.sendMsg()}}</p>
            <br>
            <p>twitterNotificator = new TwitterDecorator(notificator)</p>
            <p><b>twitterNotificator.sendMsg()</b> => {{twitterNotificator.sendMsg()}}</p>
            <br>
            <p>instagramNotificator = new InstagramDecorator(notificator)</p>
            <p><b>instagramNotificator.sendMsg()</b> => {{instagramNotificator.sendMsg()}}</p>
        `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecoratorComponent implements OnInit {

    notificator = new Notificator('Some notification msg');

    faceBookNotificator = new FaceBookDecorator(this.notificator);
    twitterNotificator = new TwitterDecorator(this.notificator);
    instagramNotificator = new InstagramDecorator(this.notificator);

    constructor() { }

    ngOnInit(): void {
    }

}
