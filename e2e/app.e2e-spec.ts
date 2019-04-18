import { WeatherInMyCityPage } from './app.po';

describe('weather-in-my-city App', () => {
  let page: WeatherInMyCityPage;

  beforeEach(() => {
    page = new WeatherInMyCityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
