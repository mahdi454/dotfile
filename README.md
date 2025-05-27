## Required package
git ranger rofi polybar picom bspwm sxhkd nitrogen feh kitty nano nodejs npm htop copyq scrot stow unzip zsh xinit xinput mc 
## set up dotfile
cd /dotfile
stow --adopt .
## Sound and Bluetooth
sudo pacman -S pipewire-audio wireplumber pipewire-pulse pipewire-alsa bluez bluez-utils blueman
## Start the service
systemctl --user --now enable wireplumber.service
sudo systemctl enable bluetooth.service
sudo systemctl start bluetooth.service

