/**
 * @license
 * Copyright (c) 2021 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, property, internalProperty} from 'lit-element';
import {PlaygroundProject} from './playground-project.js';

/**
 * Base class that connects an element to a <playground-project>.
 */
export class PlaygroundConnectedElement extends LitElement {
  /**
   * The project that this element is associated with. Either the
   * `<playground-project>` node itself, or its `id` in the host scope.
   */
  @property()
  set project(elementOrId: PlaygroundProject | string) {
    if (typeof elementOrId === 'string') {
      // Defer querying the host to a rAF because if the host renders this
      // element before the one we're querying for, it might not quite exist
      // yet.
      requestAnimationFrame(() => {
        const root = this.getRootNode() as ShadowRoot | Document;
        this._project =
          (root.getElementById(elementOrId) as PlaygroundProject | null) ??
          undefined;
      });
    } else {
      this._project = elementOrId;
    }
  }

  /**
   * The actual `<playground-project>` node, determined by the `project`
   * property.
   */
  @internalProperty()
  protected _project?: PlaygroundProject;
}
