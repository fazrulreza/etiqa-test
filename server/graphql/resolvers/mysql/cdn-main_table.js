const getWhere = (skillsets) => {
  const newSkillsets = (skillsets && skillsets !== 'ALL') ? { skillsets } : null;
  return {
    where: {
      ...newSkillsets,
    },
  };
};


export default {
  Query: {
    /**
     * Retrieve one by ID
     * @param {Object} param0 main input object
     * @param {String} param0.id id
     */
    oneUser: async (parent, { id }, { connectors: { MysqlCdnMainTable } }) => {
      const res = await MysqlCdnMainTable.findById(id);
      if (!res) {
        throw new Error(`No record found with id ${id}`);
      }
      return res;
    },
    /**
     * Retrieve all
     * @param {Object} param0 main input object
     * @param {String} param0.skillsets skillsets
     */
    allUsers: async (
      parent, { skillsets }, { connectors: { MysqlCdnMainTable } }) => {
      const where = getWhere(skillsets);
      const searchOpts = {
        ...where,
        order: [['username']],
      };
      const result = await MysqlCdnMainTable.findAll(searchOpts);
      const result2 = result.map((x) => x.dataValues);
      // console.dir(result2, { depth: null, colorized: true });
      return result2;
    },
  },
  Mutation: {
    createUser:
    async (parent, { input }, { connectors: { MysqlCdnMainTable } }) => MysqlCdnMainTable.create(input),
    deleteUser:
    async (parent, { id }, { connectors: { MysqlCdnMainTable } }) => {
      const searchOpts = {
        where: {
          id,
        },
      };
      const result = await MysqlCdnMainTable.delete(searchOpts);
      const result2 = {
        id,
        deleted: result,
      };
      // console.dir(result2, { depth: null, colorized: true });
      return result2;
    },
    updateUser:
    async (parent, { id, input }, { connectors: { MysqlCdnMainTable } }) => {
      const searchOpts = {
        object: input,
        where: {
          id,
        },
      };
      const result = await MysqlCdnMainTable.update(searchOpts);
      const result2 = {
        id,
        updated: result[0],
      };
      // console.dir(result2, { depth: null, colorized: true });
      return result2;
    },
  },
};
