const getDataFromFirebase = () => {
    //TODO: logic for get data from firebase
    //TODO: the stubs folder for local and staging environment will be generated using firebase
    return {
        groups: {
            ...require('./default_data/groups.json'),
            source: "firebase"
        },
        user: {
            ...require('./default_data/user.json'),
            source: "firebase"
        },
        users: {
            ...require('./default_data/users.json'),
            source: "firebase"
        },
        roles: require('./default_data/roles.json').map((role) => ({
            ...role,
            source: "firebase"
        })),
        postulations: require('./default_data/postulations.json').map((postulation) => ({
            ...postulation,
            source: "firebase"
        })),
    };
}

const getData = () => {
    const isProduction = process.env.ENVIRONMENT_NAME === 'production';
    return isProduction
        ?   Promise.resolve(getDataFromFirebase())
        :   Promise.resolve({
                groups: require('./default_data/groups.json'),
                user: require('./default_data/user.json'),
                users: require('./default_data/users.json'),
                roles: require('./default_data/roles.json'),
                postulations: require('./default_data/postulations.json')
            });
};

module.exports = { 
    getData
};
