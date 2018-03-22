const content = require('app/steps/grounds-for-divorce/reason/content.json').resources.en.translation.content;

Feature('Payment method');

Scenario('Card payment online', function* (I) {
  I.amOnPage('/index');
  I.startApplication();
  I.haveBrokenMarriage();
  I.haveRespondentAddress();
  I.haveMarriageCert();
  I.selectHelpWithFees(false);
  I.selectDivorceType();
  I.enterMarriageDate();
  I.selectMarriedInUk();

  I.chooseBothHabituallyResident();
  I.chooseJurisdictionInterstitialContinue();

  I.enterPeConfidentialContactDetails();
  I.enterPetitionerAndRespondentNames();
  I.enterMarriageCertificateDetails();
  I.enterPetitionerChangedName();
  I.enterPetitionerContactDetails();

  I.enterAddressUsingPostcode('/petitioner-respondent/address');
  I.enterCorrespondence();
  I.selectLivingTogetherInSameProperty();

  I.chooseRespondentServiceAddress();
  I.enterAddressUsingPostcode('/petitioner-respondent/respondent-correspondence-address');
  I.selectReasonForDivorce(content.unreasonableBehaviourHeading);
  I.enterUnreasonableBehaviourExample();

  I.enterLegalProceedings();
  I.selectFinancialArrangements();
  I.enterFinancialAdvice();

  I.enterClaimCosts();
  const isDragAndDropSupported = yield I.checkElementExist('.dz-hidden-input');
  I.uploadMarriageCertificateFile(isDragAndDropSupported);
  I.checkMyAnswers();
  I.confirmIWillPayOnline();
  const isPaymentOnStub = yield I.getPaymentIsOnStub();
  I.payOnPaymentPage(isPaymentOnStub);
  I.amDoneAndSubmitted();
});


Scenario('Card payment online failure', function* (I) {
  I.amOnPage('/index');
  I.startApplication();
  I.haveBrokenMarriage();
  I.haveRespondentAddress();
  I.haveMarriageCert();
  I.selectHelpWithFees(false);
  I.selectDivorceType();
  I.enterMarriageDate();
  I.selectMarriedInUk();

  I.chooseBothHabituallyResident();
  I.chooseJurisdictionInterstitialContinue();

  I.enterPeConfidentialContactDetails();
  I.enterPetitionerAndRespondentNames();
  I.enterMarriageCertificateDetails();
  I.enterPetitionerChangedName();
  I.enterPetitionerContactDetails();

  I.enterAddressUsingPostcode('/petitioner-respondent/address');
  I.enterCorrespondence();
  I.selectLivingTogetherInSameProperty();

  I.chooseRespondentServiceAddress();
  I.enterAddressUsingPostcode('/petitioner-respondent/respondent-correspondence-address');
  I.selectReasonForDivorce(content.unreasonableBehaviourHeading);
  I.enterUnreasonableBehaviourExample();

  I.enterLegalProceedings();
  I.selectFinancialArrangements();
  I.enterFinancialAdvice();

  I.enterClaimCosts();
  const isDragAndDropSupported = yield I.checkElementExist('.dz-hidden-input');
  I.uploadMarriageCertificateFile(isDragAndDropSupported);
  I.checkMyAnswers();

  // Failure
  I.confirmIWillPayOnline();
  const isPaymentOnStub = yield I.getPaymentIsOnStub();
  I.payFailureOnPaymentPage(isPaymentOnStub);
  I.seeCurrentUrlEquals('/pay/online');

  // Retry
  I.confirmIWillPayOnline();
  I.payOnPaymentPage(isPaymentOnStub);
  I.amDoneAndSubmitted();
});

Scenario('Card payment online cancellation with retry', function* (I) {
  I.amOnPage('/index');
  I.startApplication();
  I.haveBrokenMarriage();
  I.haveRespondentAddress();
  I.haveMarriageCert();
  I.selectHelpWithFees(false);
  I.selectDivorceType();
  I.enterMarriageDate();
  I.selectMarriedInUk();

  I.chooseBothHabituallyResident();
  I.chooseJurisdictionInterstitialContinue();

  I.enterPeConfidentialContactDetails();
  I.enterPetitionerAndRespondentNames();
  I.enterMarriageCertificateDetails();
  I.enterPetitionerChangedName();
  I.enterPetitionerContactDetails();

  I.enterAddressUsingPostcode('/petitioner-respondent/address');
  I.enterCorrespondence();
  I.selectLivingTogetherInSameProperty();

  I.chooseRespondentServiceAddress();
  I.enterAddressUsingPostcode('/petitioner-respondent/respondent-correspondence-address');
  I.selectReasonForDivorce(content.unreasonableBehaviourHeading);
  I.enterUnreasonableBehaviourExample();

  I.enterLegalProceedings();
  I.selectFinancialArrangements();
  I.enterFinancialAdvice();

  I.enterClaimCosts();
  const isDragAndDropSupported = yield I.checkElementExist('.dz-hidden-input');
  I.uploadMarriageCertificateFile(isDragAndDropSupported);
  I.checkMyAnswers();

  // Cancellation
  I.confirmIWillPayOnline();
  const isPaymentOnStub = yield I.getPaymentIsOnStub();
  I.cancelOnPaymentPage(isPaymentOnStub);
  I.seeCurrentUrlEquals('/pay/online');

  // Retry
  I.confirmIWillPayOnline();
  I.payOnPaymentPage(isPaymentOnStub);
  I.amDoneAndSubmitted();
});
