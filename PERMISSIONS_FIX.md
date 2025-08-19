# 🔧 GitHub Actions Permissions Fix

## 🚨 **Current Issue: Permission Denied**

The deployment is failing because GitHub Actions doesn't have permission to push to your repository.

**Error**: `Permission to MissyMedina/Math_Lab.git denied to github-actions[bot]`

## ✅ **Step-by-Step Fix**

### **Method 1: Enable Actions Permissions (Recommended)**

1. **Go to your repository**: https://github.com/MissyMedina/Math_Lab.git

2. **Click "Settings" tab** (at the top of the repository)

3. **Click "Actions" in the left sidebar**

4. **Click "General" under Actions**

5. **Scroll down to "Workflow permissions"**

6. **Select "Read and write permissions"** (instead of "Read repository contents permission")

7. **Check the box** "Allow GitHub Actions to create and approve pull requests"

8. **Click "Save"**

### **Method 2: Manual Pages Setup (Alternative)**

If Method 1 doesn't work, try this simpler approach:

1. **Go to Settings → Pages**

2. **Under "Source"**, select **"Deploy from a branch"**

3. **Choose "main" branch** (not gh-pages)

4. **Select "/ (root)" folder**

5. **Click "Save"**

This will deploy directly from your main branch without needing Actions.

## 🎯 **Why This Happens**

GitHub repositories have security settings that prevent Actions from writing to the repository by default. This is a security feature, but it needs to be enabled for deployment workflows.

## ✅ **After Fixing Permissions**

Once you enable "Read and write permissions":

1. **Go to the Actions tab** in your repository
2. **Find the failed workflow run**
3. **Click "Re-run all jobs"** 
4. **The deployment should succeed**
5. **Your site will be live** at `https://missymedina.github.io/Math_Lab/`

## 🔍 **Verification Steps**

After enabling permissions, you should see:

✅ **Green checkmark** on the workflow run
✅ **New "gh-pages" branch** created in your repository  
✅ **Pages settings** automatically configured
✅ **Live site** available at your GitHub Pages URL

## 🚀 **Alternative: Direct Branch Deployment**

If you prefer to avoid Actions altogether:

1. **Settings → Pages**
2. **Source: "Deploy from a branch"**
3. **Branch: "main"**
4. **Folder: "/ (root)"**
5. **Save**

Your site will deploy directly from the main branch - simpler but no automatic workflow.

## 📞 **Quick Summary**

**The fix**: Go to Settings → Actions → General → Enable "Read and write permissions"

**Then**: Re-run the failed workflow in the Actions tab

**Result**: Your Math Lab will be live at `https://missymedina.github.io/Math_Lab/`

---

*This is a common GitHub security setting - once enabled, your deployment will work perfectly!* 🎓✨
