import * as yup from 'yup';

export const tableSectionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
  wait_staff_id: yup.string().nullable(),
});
