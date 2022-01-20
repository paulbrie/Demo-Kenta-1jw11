import { useEffect, useState } from 'react'
import { Subject } from 'subjecto'

// add a default onMount hook
Subject.prototype.hook = function () {
  const [value, setValue] = useState(this.value);
  useEffect(() => this.subscribe(setValue).unsubscribe, []);
  return value;
};

export default Subject