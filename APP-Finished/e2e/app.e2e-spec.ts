import { APPStartPage } from './app.po';

describe('app-start App', () => {
  let page: APPStartPage;

  beforeEach(() => {
    page = new APPStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
