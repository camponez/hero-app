import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({

            imports: [ FormsModule ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it(`should have as title 'Tour of Heroes'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Tour of Heroes');
    }));

    it(`should first Hero`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.heroes[1]).toEqual({id: 12, name: "Narco"});
    }));

});
