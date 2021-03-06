//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Copyright (C) 2015-2016 Quildreen Motta.
// Licensed under the MIT licence.
//
// See LICENCE for licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

module.exports = (anEither) =>
  anEither.matchWith({
    Left:  () => Nothing(),
    Right: ({ value }) => Just(value)
  });

const { Just, Nothing } = require('folktale/data/maybe/core');

