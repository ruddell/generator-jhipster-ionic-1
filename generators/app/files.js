/**
 * Copyright 2013-2017 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see http://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The default is to use a file path string. It implies use of the template method.
 * For any other config an object { file:.., method:.., template:.. } can be used
 */

module.exports = {
    writeFiles
};

function writeFiles() {
    // read config from .yo-rc.json
    this.authenticationType = this.jhipsterAppConfig.authenticationType;

    // show all variables
    this.log('\n--- some config read from config ---');
    this.log(`appName=${this.ionicAppName}`);
    this.log(`authenticationType=${this.authenticationType}`);
    this.log('------\n');

    this.template('src/app/_app.component.ts', `${this.ionicAppName}/src/app/app.component.ts`);
    this.template('src/app/_app.module.ts', `${this.ionicAppName}/src/app/app.module.ts`);
    this.template('src/app/_app.scss', `${this.ionicAppName}/src/app/app.scss`);
    this.template('src/assets/img/hipster.png', `${this.ionicAppName}/src/assets/img/hipster.png`);
    this.template('src/assets/img/hipster2x.png', `${this.ionicAppName}/src/assets/img/hipster2x.png`);
    this.template('src/pages/login/_login.html', `${this.ionicAppName}/src/pages/login/login.html`);
    this.template('src/pages/login/_login.ts', `${this.ionicAppName}/src/pages/login/login.ts`);
    this.template('src/pages/menu/_menu.ts', `${this.ionicAppName}/src/pages/menu/menu.ts`);
    this.template('src/pages/signup/_signup.ts', `${this.ionicAppName}/src/pages/signup/signup.ts`);
    this.template('src/pages/tabs/_tabs.html', `${this.ionicAppName}/src/pages/tabs/tabs.html`);
    this.template('src/pages/welcome/_welcome.html', `${this.ionicAppName}/src/pages/welcome/welcome.html`);
    this.template('src/pages/welcome/_welcome.scss', `${this.ionicAppName}/src/pages/welcome/welcome.scss`);
    this.template('src/pages/welcome/_welcome.ts', `${this.ionicAppName}/src/pages/welcome/welcome.ts`);
    this.template('src/pages/_pages.ts', `${this.ionicAppName}/src/pages/pages.ts`);
    this.template('src/providers/api/_api.ts', `${this.ionicAppName}/src/providers/api/api.ts`);
    this.template('src/providers/auth/_account.service.ts', `${this.ionicAppName}/src/providers/auth/account.service.ts`);
    this.template('src/providers/auth/_auth-interceptor.ts', `${this.ionicAppName}/src/providers/auth/auth-interceptor.ts`);
    this.template('src/providers/auth/_auth-jwt.service.ts', `${this.ionicAppName}/src/providers/auth/auth-jwt.service.ts`);
    this.template('src/providers/auth/_login.service.ts', `${this.ionicAppName}/src/providers/auth/login.service.ts`);
    this.template('src/providers/auth/_principal.service.ts', `${this.ionicAppName}/src/providers/auth/principal.service.ts`);
    this.template('src/providers/user/_user.ts', `${this.ionicAppName}/src/providers/user/user.ts`);
}