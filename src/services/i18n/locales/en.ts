// tslint:disable:max-line-length
const en = {
  features: {
    notifications: {
      'dai.transfer': {
        pending: 'dai.transfer transaction pending',
        success: 'dai.transfer transaction succeeded',
        error: 'dai.transfer transaction failed',
      },
      'dai.approve': {
        pending: 'dai.approve transaction pending',
        success: 'dai.approve transaction succeeded',
        error: 'dai.approve transaction failed',
      },
    },
  },
  utils: {
    validation: {
      isRequired: 'Field is required',
      moreThen: 'Should be more then %{value}',
      moreThenOrEqual: 'Should be more then or equal %{value}',
      lessThenOrEqual: 'Should be less then or equal %{value}',
      notDefault: 'Value must be different from initial',
      maxStringLength: 'Text should be less then %{max} letters',
      onEnglishPlease: 'Should contain only english letters and numbers',
      isNumber: 'Enter a valid number',
      decimalsMoreThen: 'Enter a valid number with decimals less than %{decimals} digits',
      mustBeAnInteger: 'Enter an integer',
      isPositiveNumber: 'Must be positive number',
    },
  },
};

export { en };
