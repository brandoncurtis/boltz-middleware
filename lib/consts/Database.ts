import Sequelize, { DataTypeAbstract, DefineAttributeColumnOptions } from 'sequelize';

export type SequelizeAttributes<T extends { [key: string]: any }> = {
  [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions
};

/*
 * The following definitions are in sets of triplets, one for each Model (which represents a table in the database).
 *
 * "xFactory" is the type definition for the object which is required when a new record is to be created.
 *
 * "xAttributes" is the type definition of the record. It cannot support nullables, as it is being used for the table's columns definition.
 *
 * "xInstance" is the type definition of a fetched record as a Sequelize row instance, which contains some util properties.
 */

export type PairFactory = {
  base: string;
  quote: string;
};

export type PairAttributes = PairFactory & {
  id: string;
};

export type PairInstance = PairAttributes & Sequelize.Instance<PairAttributes>;