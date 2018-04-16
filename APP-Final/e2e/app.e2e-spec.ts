import { APPFinalPage } from './app.po';

describe('app-final App', () => {
  let page: APPFinalPage;

  beforeEach(() => {
    page = new APPFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
