const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return conversations.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schema:
 *     getAllUsers:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: int
 *             example: 1
 *           title:
 *             type: string
 *             example: title conversation
 *           image_url:
 *             type: string
 *             example: imageurl.com
 *           created_by:
 *             type: int
 *             example: 1
 *           type:
 *             type: string
 *             example: single
 */

class conversations extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image_url: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        created_by: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
        type: {
          type: DataTypes.ENUM("single", "group"),
          allowNull: true,
          defaultValue: "single",
        },
      },
      {
        sequelize,
        tableName: "conversations",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "conversations_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
