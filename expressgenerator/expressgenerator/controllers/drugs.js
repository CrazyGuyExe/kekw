exports.getAllDrugs = (req, res) => {
  res.send("GET ALL DRUGS");
};

exports.getDrugById = (req, res) => {
  const myDrug = {
    name: "G",
    price: 1000,
    city: "Mlada Boleslav",
  };
  res.send({
    requested_url: `http://localhost:3000/drugs/${req.params.id}`,
    requested_method: "GET",
    drug: myDrug,
  });
};

exports.createDrug = (req, res) => {
  const myDrug = {
    _id: "afsaasda5sd46a4",
    name: req.body.name,
    price: req.body.price,
    city: req.body.city,
  };

  res.send({
    msg: "Create new drug",
    requested_url: `http://localhost:3000/drugs/${req.params.id}`,
    requested_method: "POST",

    created_drug: {
      drug: myDrug,
      url: `http://localhost:3000/drugs/${myDrug.id}`,
      method: "GET",
    },
  });
};

exports.putDrug = (req, res) => {
  const myDrug = {
    _id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    city: req.body.city,
  };

  res.send({
    msg: "Updated drug",
    requested_url: `http://localhost:3000/drugs`,
    requested_method: "PUT",

    created_drug: {
      drug: myDrug,
      url: `http://localhost:3000/drugs/${myDrug.id}`,
      method: "GET",
    },
  });
};

exports.patchDrug = (req, res) => {
  const update = {};
  for(let ops of req.body){
    update[ops.propsName] = ops.value;
  }

  res.send({
    msg: "Patched drug",
    requested_url: `http://localhost:3000/drugs`,
    requested_method: "PATCH",

    patched_drug: {
      drug: update,
      url: `http://localhost:3000/drugs/${req.params.id}`,
      method: "GET",
    },
  });
};
exports.delDrugs = (req, res) => {
  res.send(`Deleted Drug: ${req.params.id}`);
};
