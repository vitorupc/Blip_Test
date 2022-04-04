const { TouchBarColorPicker } = require("electron");

Feature('login');

Scenario('TC001_login_email_incorreto', ({ I }) => {

    I.amOnPage('/login')  
    I.fillField('email', 'emailIncorreto@blip.com')
    I.fillField('senha', '123456')
    I.seeElement('#mensagem')
});

    Scenario('TC002_login_senha_incorreta', ({ I }) => {

        I.amOnPage('/login')  
        I.fillField('email', 'emailCorreto@blip.com')
        I.fillField('senha', '1223456') // senha incorreta
        I.seeElement('#mensagem')
        
    });
