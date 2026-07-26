import { errors } from '../utils/dictionary';

export function validateCityName(cityName: string) {
  if (!cityName || typeof cityName !== 'string') {
    return {
      isValid: false,
      message: errors.city.required,
    };
  }

  const trimmed = cityName.trim();

  if (trimmed.length === 0) {
    return {
      isValid: false,
      message: errors.city.empty,
    };
  }

  const invalidCharsPattern = /[<>@#$%^&*()_+={\}[\]:;'"\\|?/~`]/;
  if (invalidCharsPattern.test(trimmed)) {
    return {
      isValid: false,
      message: errors.city.escape,
    };
  }

  return {
    isValid: true,
    message: errors.city.valid,
  };
}