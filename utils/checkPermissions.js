const CustomError = require('../errors')

const checkPermissions = (requestUser, resourceUserId)=>{
    //console.log(requestUser,resourceUserId, typeof resourceUserId);

    if(requestUser.role === 'admin') return;
    if(requestUser.userId === resourceUserId.toString()) return;
    throw new CustomError.UnauthenticatedError('Not authorized to access this route.')
}

module.exports = checkPermissions;