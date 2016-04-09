'use strict';
/*                          _       _
 *                         (_)     | |
 *__      _____  __ ___   ___  __ _| |_ ___
 *\ \ /\ / / _ \/ _` \ \ / / |/ _` | __/ _ \
 * \ V  V /  __/ (_| |\ V /| | (_| | ||  __/
 *  \_/\_/ \___|\__,_| \_/ |_|\__,_|\__\___|
 *
 * Copyright © 2016 Weaviate. All rights reserved.
 * See www.weaviate.com for details
 * See package.json for auther and maintainer info
 * Contact: @weaviate_iot / yourfriends@weaviate.com
 */
const ACTIONS = require('./actions.js');
module.exports = {
    /**
     * get
     * @param   {string} i input URL
     * @param   {object} weaveObject OBJ Object with the send in body and params
     * @param   {object} Q Defer object
     * @returns {object} deferred.resolve or deferred.reject
     */
  get: (i, weaveObject, Q) => {
      var deferred = Q.defer();
      try {
            /**
             * Validate if the provide body is correct
             */
          ACTIONS.validateBodyObject(weaveObject, [], (result) => {
              switch (result) {
                  case true:
                        /**
                         * Provided body is correct, handle the request
                         */
                    ACTIONS.process('clouddevices.personalizedInfos.get', [
                            /**
                             * description  string
                             * type  Unique personalizedInfo ID. Value: the fixed string "me".
                             */
                          'id',
                            /**
                             * description  string
                             * type  Identifies what kind of resource this is. Value: the fixed string "clouddevices#personalizedInfo".
                             */
                          'kind',
                            /**
                             * description  string
                             * type  Timestamp of the last device usage by the user in milliseconds since epoch UTC.
                             * format  int64
                             */
                          'lastUseTimeMs',
                            /**
                             * description  string
                             * type  Personalized device location.
                             */
                          'location',
                            /**
                             * description  string
                             * type  Personalized device display name.
                             */
                          'name'
                        ], (processResult) => {
                          switch (processResult) {
                              case false:
                                deferred.reject('Something processing this request went wrong');
                              default:
                                deferred.resolve(processResult);
                            }
                        });
                    break;
                  default:
                  /**
                   * Provided body is incorrect, send error
                   */
                  deferred.reject('Provided body is incorrect');
                  break;
                }
            });
        } catch (error) {
          deferred.reject(error);
        }
      return deferred.promise;
    },
    /**
     * patch
     * @param   {string} i input URL
     * @param   {object} weaveObject OBJ Object with the send in body and params
     * @param   {object} Q Defer object
     * @returns {object} deferred.resolve or deferred.reject
     */
  patch: (i, weaveObject, Q) => {
      var deferred = Q.defer();
      try {
            /**
             * Validate if the provide body is correct
             */
          ACTIONS.validateBodyObject(weaveObject, [], (result) => {
              switch (result) {
                  case true:
                        /**
                         * Provided body is correct, handle the request
                         */
                    ACTIONS.process('clouddevices.personalizedInfos.patch', [
                            /**
                             * description  string
                             * type  Unique personalizedInfo ID. Value: the fixed string "me".
                             */
                          'id',
                            /**
                             * description  string
                             * type  Identifies what kind of resource this is. Value: the fixed string "clouddevices#personalizedInfo".
                             */
                          'kind',
                            /**
                             * description  string
                             * type  Timestamp of the last device usage by the user in milliseconds since epoch UTC.
                             * format  int64
                             */
                          'lastUseTimeMs',
                            /**
                             * description  string
                             * type  Personalized device location.
                             */
                          'location',
                            /**
                             * description  string
                             * type  Personalized device display name.
                             */
                          'name'
                        ], (processResult) => {
                          switch (processResult) {
                              case false:
                                deferred.reject('Something processing this request went wrong');
                              default:
                                deferred.resolve(processResult);
                            }
                        });
                    break;
                  default:
                        /**
                         * Provided body is incorrect, send error
                         */
                    deferred.reject('Provided body is incorrect');
                    break;
                }
            });
        } catch (error) {
          deferred.reject(error);
        }
      return deferred.promise;
    },
    /**
     * update
     * @param   {string} i input URL
     * @param   {object} weaveObject OBJ Object with the send in body and params
     * @param   {object} Q Defer object
     * @returns {object} deferred.resolve or deferred.reject
     */
  update: (i, weaveObject, Q) => {
      var deferred = Q.defer();
      try {
            /**
             * Validate if the provide body is correct
             */
          ACTIONS.validateBodyObject(weaveObject, [], (result) => {
              switch (result) {
                  case true:
                        /**
                         * Provided body is correct, handle the request
                         */
                    ACTIONS.process('clouddevices.personalizedInfos.update', [
                            /**
                             * description  string
                             * type  Unique personalizedInfo ID. Value: the fixed string "me".
                             */
                          'id',
                            /**
                             * description  string
                             * type  Identifies what kind of resource this is. Value: the fixed string "clouddevices#personalizedInfo".
                             */
                          'kind',
                            /**
                             * description  string
                             * type  Timestamp of the last device usage by the user in milliseconds since epoch UTC.
                             * format  int64
                             */
                          'lastUseTimeMs',
                            /**
                             * description  string
                             * type  Personalized device location.
                             */
                          'location',
                            /**
                             * description  string
                             * type  Personalized device display name.
                             */
                          'name'
                        ], (processResult) => {
                          switch (processResult) {
                              case false:
                                deferred.reject('Something processing this request went wrong');
                              default:
                                deferred.resolve(processResult);
                            }
                        });
                    break;
                  default:
                        /**
                         * Provided body is incorrect, send error
                         */
                    deferred.reject('Provided body is incorrect');
                    break;
                }
            });
        } catch (error) {
          deferred.reject(error);
        }
      return deferred.promise;
    }
};
