import { Model, Sequelize, DataTypes } from 'sequelize';
import Pair from './Pair';

class ReverseSwap extends Model {
  public id!: string;
  public fee!: number;
  public pair!: string;
  public orderSide!: number;
  public status!: string;
  public invoice!: string;
  public preimage!: string;
  public transactionId!: string;
  public createdAt!: string;
  public updatedAt!: string;

  public static load = (sequelize: Sequelize) => {
    ReverseSwap.init({
      id: { type: new DataTypes.STRING(255), primaryKey: true, allowNull: false },
      fee: { type: new DataTypes.INTEGER(), allowNull: false },
      pair: { type: new DataTypes.STRING(255), allowNull: false },
      orderSide: { type: new DataTypes.INTEGER(), allowNull: false },
      status: { type: new DataTypes.STRING(255), allowNull: true },
      invoice: { type: new DataTypes.STRING(255), allowNull: false },
      preimage: { type: new DataTypes.STRING(255), allowNull: true },
      transactionId: { type: new DataTypes.STRING(255), allowNull: false },
      createdAt: { type: new DataTypes.STRING(255), allowNull: false },
      updatedAt: { type: new DataTypes.STRING(255), allowNull: true },
    }, {
      sequelize,
      tableName: 'reverseSwaps',
    });

    ReverseSwap.belongsTo(Pair, {
      foreignKey: 'pair',
    });
  }
}

export default ReverseSwap;
