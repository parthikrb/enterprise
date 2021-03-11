/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      username
      password
      email
      role
      picture {
        bucket
        region
        key
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      username
      password
      email
      role
      picture {
        bucket
        region
        key
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      username
      password
      email
      role
      picture {
        bucket
        region
        key
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const createSquad = /* GraphQL */ `
  mutation CreateSquad(
    $input: CreateSquadInput!
    $condition: ModelSquadConditionInput
  ) {
    createSquad(input: $input, condition: $condition) {
      id
      squadname
      productowner {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrummaster {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrumteam {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      velocity
      status
      createdby
      updatedby
      createdAt
      updatedAt
    }
  }
`;
export const updateSquad = /* GraphQL */ `
  mutation UpdateSquad(
    $input: UpdateSquadInput!
    $condition: ModelSquadConditionInput
  ) {
    updateSquad(input: $input, condition: $condition) {
      id
      squadname
      productowner {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrummaster {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrumteam {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      velocity
      status
      createdby
      updatedby
      createdAt
      updatedAt
    }
  }
`;
export const deleteSquad = /* GraphQL */ `
  mutation DeleteSquad(
    $input: DeleteSquadInput!
    $condition: ModelSquadConditionInput
  ) {
    deleteSquad(input: $input, condition: $condition) {
      id
      squadname
      productowner {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrummaster {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrumteam {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      velocity
      status
      createdby
      updatedby
      createdAt
      updatedAt
    }
  }
`;
