var chalk = require('chalk'),
    fs = require('fs'),
    path = require('path');

module.exports = {
    bumpWithBranch: function(version, build, branch) {
        var bArray = branch.split('/');
        var feature = bArray[bArray.length - 1];
    
        return version + '-' + feature + '.' + build;
    },
    bump: function(version, build) {
        var vArray = version.split('.');
    
        var major = vArray[0];
        var minor = vArray[1];
    
        return major + '.' + minor + '.' + build;
    },
    getParentPackage: function() {
        var pkg;
        try {
            pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), './package.json')));
        } catch (e) {
            this.error('Could not open the package.json!');
        }
        return pkg;
    },
    error: function(msg) {
        console.log(chalk.red(msg));
        process.exit(-1);
    },
    log: function(msg, color) {
        if (!color) {
            color = 'blue';
        }
        console.log(chalk[color](msg));
    }
}
