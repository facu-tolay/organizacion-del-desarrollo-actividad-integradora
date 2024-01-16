const baseFields = [
  {
    name: 'email',
    type: 'character varying',
  },
  {
    name: 'username',
    type: 'character varying',
  },
  {
    name: 'birthdate',
    type: 'date',
  },
  {
    name: 'city',
    type: 'character varying',
  },
  {
    name: 'created_at',
    type: 'timestamp with time zone',
  },
];

const expectedFields = [
  ...baseFields,
  {
    name: 'updated_at',
    type: 'timestamp with time zone',
  },
];

module.exports = {
  baseFields,
  expectedFields,
}