#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"

echo "> Getting data..."
git clone https://$yps_token@code.hq.twilio.com/twilio/yps.git

echo "> ls"
ls
