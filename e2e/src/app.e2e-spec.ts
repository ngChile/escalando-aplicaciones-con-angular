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

  it('Titulos locos!', () => {
    const titles = [
      // 'What is love?',
      // 'Baby dont hurt me',
      // 'dont hurt me',
      // 'no more (8)'
      'What is Lorem Ipsum?',
      'What is Lorem Ipsum?'
    ];
    const titleList = page.getCardTitles();

    titles.forEach((title, index) => {
      expect(titleList.get(index).getText()).toEqual(title);
    });
  });
});
