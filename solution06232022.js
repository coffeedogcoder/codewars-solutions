String.prototype.toJadenCase = function () {

    function capFirstLet(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return this.split(' ').map(capFirstLet).join(' ');
  };