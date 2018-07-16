/*                          _       _
 *__      _____  __ ___   ___  __ _| |_ ___
 *\ \ /\ / / _ \/ _` \ \ / / |/ _` | __/ _ \
 * \ V  V /  __/ (_| |\ V /| | (_| | ||  __/
 *  \_/\_/ \___|\__,_| \_/ |_|\__,_|\__\___|
 *
 * Copyright © 2016 - 2018 Weaviate. All rights reserved.
 * LICENSE: https://github.com/creativesoftwarefdn/weaviate/blob/develop/LICENSE.md
 * AUTHOR: Bob van Luijt (bob@kub.design)
 * See www.creativesoftwarefdn.org for details
 * Contact: @CreativeSofwFdn / bob@kub.design
 */
// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// QuestionCreate question create
// swagger:model QuestionCreate
type QuestionCreate struct {

	// The Uuid of the answer when generated and returned to the /answer endpoint.
	// Format: uuid
	AnswerUUID strfmt.UUID `json:"answerUuid,omitempty"`

	// question
	Question VectorBasedQuestion `json:"question"`

	// return to
	ReturnTo *QuestionCreateReturnTo `json:"returnTo,omitempty"`
}

// Validate validates this question create
func (m *QuestionCreate) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAnswerUUID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateQuestion(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateReturnTo(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *QuestionCreate) validateAnswerUUID(formats strfmt.Registry) error {

	if swag.IsZero(m.AnswerUUID) { // not required
		return nil
	}

	if err := validate.FormatOf("answerUuid", "body", "uuid", m.AnswerUUID.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *QuestionCreate) validateQuestion(formats strfmt.Registry) error {

	if swag.IsZero(m.Question) { // not required
		return nil
	}

	if err := m.Question.Validate(formats); err != nil {
		if ve, ok := err.(*errors.Validation); ok {
			return ve.ValidateName("question")
		}
		return err
	}

	return nil
}

func (m *QuestionCreate) validateReturnTo(formats strfmt.Registry) error {

	if swag.IsZero(m.ReturnTo) { // not required
		return nil
	}

	if m.ReturnTo != nil {
		if err := m.ReturnTo.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("returnTo")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *QuestionCreate) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *QuestionCreate) UnmarshalBinary(b []byte) error {
	var res QuestionCreate
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// QuestionCreateReturnTo question create return to
// swagger:model QuestionCreateReturnTo
type QuestionCreateReturnTo struct {

	// The answer should be returned to which host?
	Host string `json:"host,omitempty"`

	// The answer should be returned to which port?
	Port string `json:"port,omitempty"`
}

// Validate validates this question create return to
func (m *QuestionCreateReturnTo) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *QuestionCreateReturnTo) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *QuestionCreateReturnTo) UnmarshalBinary(b []byte) error {
	var res QuestionCreateReturnTo
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
