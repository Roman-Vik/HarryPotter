export const changeData = (data) => {
  return data.map((obj) => {
    return {
      name: obj.name,
      actor: obj.actor,
      gender: obj.gender,
      house: obj.house,
      wand: obj.wand.core,
      alive: obj.alive === true ? 'yes' : 'no',
    };
  });
};
