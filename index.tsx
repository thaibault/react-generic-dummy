// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Dummy */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {Mapping} from 'clientnode'
import {
    forwardRef,
    ForwardRefRenderFunction,
    FunctionComponent,
    ReactElement,
    RefObject
} from 'react'
// endregion
export type Props = Mapping<unknown> & {children?: ReactElement}
export const reference: {current: RefObject<unknown>|null} =
    {current: null}
/**
 * Generic strict wrapper component.
 * @param properties - Given component properties.
 * @param ref - Given reference to mutable persistent object.
 * @returns React elements.
 */
export const Dummy: FunctionComponent<Props> & {isDummy: true} = forwardRef(
    ((
        properties: Props, ref: RefObject<unknown>|null
    ): ReactElement => {
        reference.current = ref

        return <div>
            {properties.children ?? null}
        </div>
    }) as ForwardRefRenderFunction<unknown, Mapping<unknown>>
) as unknown as FunctionComponent<unknown> & {isDummy: true}
Dummy.isDummy = true

export default Dummy
