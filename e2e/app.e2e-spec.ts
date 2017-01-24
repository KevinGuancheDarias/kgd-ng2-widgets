import { KgdNg2ComponentsPage } from './app.po';

describe('kgd-ng2-components App', function() {
  let page: KgdNg2ComponentsPage;

  beforeEach(() => {
    page = new KgdNg2ComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
