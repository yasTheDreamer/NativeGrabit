/**
 * unit tests
 * atoms
 */

require('./components/atoms/facebook/FacebookButton.unit.test');
require('./components/atoms/headline/Headline.unit.test');
require('./components/atoms/iconImage/iconImage.unit.test');
require('./components/atoms/infoHeader/InfoHeader.unit.test');
require('./components/atoms/infoText/InfoText.unit.test');
require('./components/atoms/signButton/SignButton.unit.test');

/**
 * integration tests
 * molecules
 */

require('./components/molecules/home_backscene/BackScene.integration.test');
require('./components/molecules/home_signButtons/SignButtons.integration.test');
require('./components/molecules/sign_backscene/BackScene.integration.test');
require('./components/molecules/infoBox/InfoBox.integration.test');

/**
 * integration tests
 * organisms
 */

require('./components/organisms/infoOrganism/InfoOrganism.integration.test');

/**
 * integration tests
 * scenes
 */

require('./scenes/home/Home.integration.test');
require('./scenes/sign/Sign.integration.test');

//unit test
require('./App.unit.test');
