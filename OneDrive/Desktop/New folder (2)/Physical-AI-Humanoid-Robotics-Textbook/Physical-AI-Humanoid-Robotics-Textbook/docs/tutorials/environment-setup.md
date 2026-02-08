---
title: Environment Configuration Tutorial
sidebar_label: Environment Setup
sidebar_position: 2
description: Tutorial for configuring development environments for robotics
---

# Environment Configuration Tutorial

This tutorial provides instructions for configuring development environments for robotics applications, including ROS 2, simulation tools, and AI frameworks.

## Development Environment Overview

A proper robotics development environment includes:
- ROS 2 for robot communication and control
- Simulation tools (Gazebo, Unity, Isaac)
- AI/ML frameworks for perception and control
- Development tools and IDEs
- Version control systems

## ROS 2 Environment Setup

### Installation
1. **Add ROS 2 repository**:
   ```bash
   sudo apt update && sudo apt install curl gnupg lsb-release
   curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key | sudo gpg --dearmor -o /usr/share/keyrings/ros-archive-keyring.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
   ```

2. **Install ROS 2 Humble**:
   ```bash
   sudo apt update
   sudo apt install ros-humble-desktop
   sudo apt install ros-humble-ros-base
   ```

3. **Install colcon build tools**:
   ```bash
   sudo apt install python3-colcon-common-extensions
   ```

### Environment Configuration
1. **Source ROS 2 in your shell**:
   ```bash
   echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
   source ~/.bashrc
   ```

2. **Create a workspace**:
   ```bash
   mkdir -p ~/ros2_ws/src
   cd ~/ros2_ws
   colcon build
   source install/setup.bash
   ```

## Python Environment Setup

### Virtual Environment
1. **Create virtual environment**:
   ```bash
   python3 -m venv ~/robotics_env
   source ~/robotics_env/bin/activate
   ```

2. **Install robotics libraries**:
   ```bash
   pip install numpy scipy matplotlib
   pip install opencv-python
   pip install transforms3d
   pip install pyquaternion
   ```

### AI/ML Frameworks
1. **Install PyTorch** (for deep learning):
   ```bash
   pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
   ```

2. **Install TensorFlow** (alternative):
   ```bash
   pip install tensorflow[and-cuda]
   ```

3. **Install reinforcement learning libraries**:
   ```bash
   pip install gymnasium[all]
   pip install stable-baselines3[extra]
   pip install sb3-contrib
   ```

## IDE and Development Tools

### VS Code Configuration
1. **Install VS Code** from code.visualstudio.com
2. **Install extensions**:
   - ROS (for ROS 2 development)
   - Python
   - C/C++ (for performance-critical components)
   - Markdown All in One
   - GitLens

3. **Configure settings for robotics development**:
   ```json
   {
     "python.defaultInterpreterPath": "~/robotics_env/bin/python",
     "files.associations": {
       "*.msg": "yaml",
       "*.srv": "yaml",
       "*.action": "yaml"
     }
   }
   ```

### Build Tools
1. **Install CMake** (for C++ packages):
   ```bash
   sudo apt install cmake
   ```

2. **Install build essentials**:
   ```bash
   sudo apt install build-essential
   sudo apt install python3-dev
   ```

## Simulation Environment Integration

### Gazebo Integration
1. **Install Gazebo ROS packages**:
   ```bash
   sudo apt install ros-humble-gazebo-ros-pkgs ros-humble-gazebo-plugins
   ```

2. **Install additional simulation tools**:
   ```bash
   sudo apt install ros-humble-ros-gz
   sudo apt install ros-humble-ros2-control
   sudo apt install ros-humble-ros2-controllers
   ```

### Unity Integration
1. **Install Unity ROS TCP Connector**:
   - Through Unity Package Manager
   - Or manually from the GitHub repository

2. **Set up ROS bridge**:
   - Install the ROS-TCP-Endpoint package
   - Configure network settings for communication

## AI Framework Integration

### NVIDIA Isaac Integration
1. **Install Isaac ROS packages**:
   ```bash
   sudo apt install ros-humble-isaac-ros-gem ros-humble-isaac-ros-visual-slam
   sudo apt install ros-humble-isaac-ros-point-cloud-transport
   ```

2. **Install perception packages**:
   ```bash
   sudo apt install ros-humble-isaac-ros-apriltag ros-humble-isaac-ros-dnn-inference
   ```

## Version Control Setup

### Git Configuration
1. **Configure Git for robotics projects**:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   git config --global core.editor "code --wait"
   ```

2. **Set up Git hooks for code quality**:
   ```bash
   # Install pre-commit hooks
   pip install pre-commit
   pre-commit sample-config > .pre-commit-config.yaml
   ```

### Git Ignore Configuration
Create a `.gitignore` file with robotics-specific exclusions:
```
# Build outputs
build/
install/
log/

# Simulation data
*.log
*.log.*
*.state

# Models and assets
*.dae
*.stl
*.obj

# Virtual environments
venv/
env/
robotics_env/

# IDE files
.vscode/
.idea/
*.swp
```

## Performance Optimization

### System Configuration
1. **Increase shared memory size** (for simulation):
   ```bash
   echo "kernel.shmmax=134217728" | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

2. **Configure real-time priorities** (for control systems):
   ```bash
   sudo usermod -a -G dialout $USER
   # Log out and back in for changes to take effect
   ```

### Resource Management
1. **Monitor resource usage**:
   ```bash
   htop
   nvidia-smi  # for GPU monitoring
   ```

2. **Configure swap space** (for large simulations):
   ```bash
   sudo fallocate -l 4G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   ```

## Testing Your Setup

### Basic Tests
1. **Test ROS 2 installation**:
   ```bash
   source /opt/ros/humble/setup.bash
   ros2 topic list
   ```

2. **Test Python environment**:
   ```bash
   source ~/robotics_env/bin/activate
   python -c "import numpy; import cv2; import torch; print('Python environment OK')"
   ```

3. **Test simulation environment**:
   ```bash
   gz sim --version
   ```

### Creating a Test Package
1. **Create a simple ROS 2 package**:
   ```bash
   cd ~/ros2_ws/src
   ros2 pkg create --build-type ament_python test_robot_pkg
   cd ~/ros2_ws
   colcon build
   source install/setup.bash
   ros2 run test_robot_pkg test_robot_pkg
   ```

## Troubleshooting

### Common Issues
- **ROS 2 not found**: Ensure you've sourced the setup.bash file
- **Python packages not found**: Activate the virtual environment
- **Simulation performance**: Check GPU drivers and system resources
- **Network issues**: Verify ROS_DOMAIN_ID and network configuration

### Environment Verification Script
Create a script to verify your environment:
```bash
#!/bin/bash
echo "Checking ROS 2 installation..."
source /opt/ros/humble/setup.bash
ros2 --version

echo "Checking Python environment..."
python3 -c "import numpy, cv2, torch; print('Python packages OK')"

echo "Checking Gazebo..."
gz --version

echo "Environment verification complete!"
```

## Maintaining Your Environment

### Regular Updates
1. **Update ROS 2 packages**:
   ```bash
   sudo apt update && sudo apt upgrade
   ```

2. **Update Python packages**:
   ```bash
   source ~/robotics_env/bin/activate
   pip list --outdated
   pip install --upgrade <package-name>
   ```

### Backup Configuration
Consider backing up your development environment configuration:
- Shell profile (.bashrc, .zshrc)
- VS Code settings
- Virtual environment requirements
- Git configurations

## Next Steps

After completing this environment setup:
- Test your configuration with simple examples
- Set up version control for your projects
- Explore the specific module tutorials for advanced topics
- Join the robotics community forums for support

## References

1. ROS 2 Documentation. (2023). "Installation Guide." ROS.org.
2. Open Robotics. (2023). "ROS 2 Development Workflow." Open Robotics.
3. NVIDIA Corporation. (2023). "Isaac ROS Setup Guide." NVIDIA.