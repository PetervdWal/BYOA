import {Module} from "../core/decorators/module.decorator.ts";
import {AppComponent} from "./app.component.ts";

@Module({
    declarations: [AppComponent],
})
export class AppModule {}