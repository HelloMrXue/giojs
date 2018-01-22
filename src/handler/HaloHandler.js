/**
 * @author syt123450 / https://github.com/syt123450
 */

import { Halo } from "../objects/Halo.js";

function HaloHandler ( controller ) {

    function create () {

        controller.halo = new Halo( controller );
        controller.haloShader = controller.halo.haloShader;
        controller.scene.add( controller.halo );

    }

    function remove () {

        controller.scene.remove( controller.halo );
        controller.halo =  null;

    }

    function update () {

        controller.haloShader.update();

    }

    return {

        create: create,

        remove: remove,

        update: update

    }

}

export { HaloHandler }