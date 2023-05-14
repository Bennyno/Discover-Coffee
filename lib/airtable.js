const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("coffee-stores");

const getRecord = (record) => {
  return {
    recordId: record.id,
    ...record.fields,
  };
};

const getRecords = (records) => {
  return records.map((record) => getRecord(record));
};

const findRecordByFilter = async (id) => {
  const findCoffeeStoreRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  return getRecords(findCoffeeStoreRecords);
};

export { table, getRecords, findRecordByFilter };
