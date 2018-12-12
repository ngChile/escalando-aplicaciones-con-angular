import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('App');
  });

  it('should have correct titles', () => {
    const titles = [
      'What is Lorem Ipsum?',
      'What is Lorem Ipsum?'
    ];
    const titilesList = page.getcardTitles();

    titles.forEach((title, index) => {
      expect(titilesList.get(index).getText()).toEqual(title);
    });
  });
});
